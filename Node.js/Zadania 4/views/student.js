function renderPage() {
    return `
      <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Student Profile</title>
        </head>
        <body>
          <h1>Student profile</h1>
          <p>Numer albomu: ${data.code}</p>
          <p>Imię: ${data.name}</p>
          <p>Nazwisko: ${data.lastname}</p>
          <p>Płeć: ${data.gender}</p>
          <p>Wiek: ${data.age}</p>
          <p>Kierunek: ${data.studyField}</p>
        </body>
      </html>
    `;
  }
     
  module.exports = { renderPage };