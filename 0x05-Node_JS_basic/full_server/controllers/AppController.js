/**
 * Contains the miscellaneous route handlers.
 * @author Daisy Mwambi <https://github.com/Shighi>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
