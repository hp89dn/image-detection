const request = require("request");
const uuidv4 = require("uuid/v4");

exports.getDetection = (req, res, next) => {
  try {
    const imageUrl = req.body.imageUrl;  // GET BASE64 IMAGE FROM CLIENT

    // REQUEST TO AZURE ( COGNITIVESERVICES)
    request(
      {
        url:
          "https://chatbotimagedetection.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Description&detail=Celebrities&language=en", // Thay bằng URL của API
        headers: {
          "Ocp-Apim-Subscription-Key": "64e34ec3f9ac4d848a5094d83143725f",
        },
        method: "POST",
        json: true,
        body: {
          url: imageUrl, // base64 url image
        },
      },
      (err, response, body) => {
        // Get data from body
        // if can be detected, return text of detection ( example: a boy is standing near a tree)
        if (body.description.captions[0]) { 
          
          // Setup config to translate detected text to Vietnamse & English ( use Translator API of Azure)
          const captionsText = body.description.captions[0].text;
          let options = {
            method: "POST",
            baseUrl: "https://api.cognitive.microsofttranslator.com",
            url: "translate",
            qs: {
              "api-version": "3.0",
              to: ["vi", "en"],
            },
            headers: {
              "Ocp-Apim-Subscription-Key": "4310624d675e462aa0bd92c878b01702",
              "Content-type": "application/json",
              "X-ClientTraceId": uuidv4().toString(),
            },
            body: [
              {
                text: captionsText, // text need to be translated
              },
            ],
            json: true,
          };

          // START TO TRANSLATE
          try {
            request(options, function (err, response, body) {
                res.json({
                  vi: body[0].translations[0].text, // Vietnamese
                  en: body[0].translations[1].text, // English
                });
            });
          } catch (error) {
            res.json({
              vi: "Không thể nhận diện.",
              en: "Can not detect this picture.",
            });
          }
        } else {
          res.json({
            vi: "Không thể nhận diện.",
            en: "Can not detect this picture.",
          });
        }
      }
    );
  } catch (error) {
    res.json({
      vi: "Không thể nhận diện.",
      en: "Can not detect this picture.",
    });
  }
};
