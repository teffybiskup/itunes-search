/*
 * Accessed links:
 * https://www.npmjs.com/package/superagent
 * https://visionmedia.github.io/superagent/#post--put-requests
 * https://mongoosejs.com/docs/api/model.html#model_Model.findById/
 * https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * https://expressjs.com/en/guide/error-handling.html
 */

/*
 * I understood from the code that new users could be created,
 * but new shops could not, so I kept it that way.
 * Otherwise, it is possible to use findOneAndUpdate() for shops too.
 */

/*
* New Utils model
*/

// Creating new method to use Model.findById.
exports.getById = (req, res) => {
  var model = req.params.model;
  var id = req.params.id;

  // Using callback without exec().
  model.findById(id, (err, result) => {
    if (err || !result) {
      // Generic error 404 not found handling.
      return res.status(404).send(err || { message: "No information found" });
    }

    return result;
  });
};

// Creating new method to insert information into the array only if it doesn't already exist.
exports.addUniqueValuesToArray() = (req, res) => {
  var newData = req.params.data;
  var array = req.params.array;

  if (array.indexOf(newData) === -1) { // Potential Problem: did not check the return of the indexOf function.
    array.push(newData)
  }
};

/*
* Shop model
*/

// Creating new method to add invite and user to a shop.
exports.addUserInvite() = (req, res) => {
  var shop = Utils.getById(Shop, req.params.shopId);
  var user = Utils.getById(User, req.params.userId);

  Utils.addUniqueValuesToArray({array: shop.invitations, data: req.params.invitationId});
  Utils.addUniqueValuesToArray({array: shop.users, data: users._id});

  shop.save();
}

/*
* Middleware that processes users' invitations to use private shops
*/
var request = require("superagent"); // Potential Problem: not requiring superagent before using it.

exports.inviteUser = (req, res) => {
  var invitationBody = req.params.body; // Potential Problem: did not get the body of invitation from params being passed.
  var shopId = req.params.shopId;
  var authUrl = "https://url.to.auth.system.com/invitation";

  request
    .post(authUrl)
    .set("Content-Type", "application/json") // Potential Problem: It is necessary to set the content type header field appropriately.
    .send(invitationBody)
    .then((invitationResponse) => {
      /*
       * Using then()/catch() instead of end().
       * In that case, it is not necessary to check the status code,
       * because 'then' already handles successful responses.
       */
      User.findOneAndUpdate(
        {
          authId: invitationResponse.body.authId,
        },
        {
          // Potential Problem: Setting new user properly if nothing matches the filter.
          $set: {
            authId: invitationResponse.body.authId,
            email: invitationBody.email,
          },
        },
        {
          upsert: true,
          new: true,
          returnNewDocument: true, // Adding new option to return updated user.
        }
      );

      Shop.addUserInvite({
        shopId,
        userId: invitationResponse.body.authId,
        invitation: invitationResponse
      });

      res.json(invitationResponse); // Returning the invitation response only if successful.
    })
    .catch(() => {
      /*
       * In that case, it is not necessary to check the status code,
       * because 'catch' already handles failure responses.
       */
      res.status(409).send({
        // Sending HTTP 409 Conflict response status code.
        error: "User already invited to this shop",
      });
    });
};
