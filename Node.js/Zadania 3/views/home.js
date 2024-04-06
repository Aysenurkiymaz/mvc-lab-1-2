function renderPage() {
    return `
      <html lang="pl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>home.html</title>
      </head>
      <body>
          <h1>Prosty Formularz</h1>
          <form action="/student" method="post">
              <label for="name">Imię:</label>
              <input type="text" id="name" name="name" required><br><br>
      
              <label for="lastname">Nazwisko:</label>
              <input type="text" id="lastname" name="lastname" required><br><br>
      
              <label for="age">Wiek:</label>
              <input type="number" id="age" name="age" required><br><br>
      
              <label for="gender">Płeć:</label>
              <select id="gender" name="gender" required>
                  <option value="male">Mężczyzna</option>
                  <option value="female">Kobieta</option>
                  <option value="other">Inna</option>
              </select><br><br>
      
              <label for="code">Numer albumu:</label>
              <input type="number" id="code" name="code" required><br><br>
      
              <label for="studyField">Kierunek:</label>
              <input type="text" id="studyField" name="studyField" required><br><br>
      
              <button type="submit">Wyślij</button>
          </form>
      </body>
      </html>
    `;
  }
   
  module.exports = { renderPage };