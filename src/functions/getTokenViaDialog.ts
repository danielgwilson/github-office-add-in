import { clientID, redirectURI } from "../../ghKeys";

let _dialogOpen = false;

/**
 * Function retrieves a cached token or opens a dialog box if there is no saved token. Note that this is not a sufficient example of authentication but is intended to show the capabilities of the Dialog object.
 */
export function getTokenViaDialog(): Promise<string> {
  return new Promise(function(resolve, reject) {
    if (_dialogOpen) {
      // Can only have one dialog box open at once, wait for previous dialog box's token
      let timeout = 5;
      let count = 0;
      var intervalId = setInterval(function() {
        count++;
        if (count >= timeout) {
          reject("Timeout while waiting for token");
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      _dialogOpen = true;
      OfficeRuntime.displayWebDialog(
        `https://github.com/login/oauth/authorize?client_id=${clientID}`,
        {
          height: "50%",
          width: "50%",
          onMessage: function(message, dialog) {
            const code = message;

            fetch(
              `https://github-add-in-for-excel.azurewebsites.net/authenticate/${code}`
            ).then(response => {
              response.json().then(json => resolve(json.token));
            });

            dialog.close();
            return;
          },
          onRuntimeError: function(error, dialog) {
            reject(error);
          }
        }
      ).catch(function(e) {
        reject(e);
      });
    }
  });
}
