function sheetsToFirestore() {
   const email = "victor@suite-service-app-16b2d.iam.gserviceaccount.com";
   const projectId = "suite-service-app-16b2d";
   const key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDAzdyRGGRsBNrx\nVVHR5KFGbj+eBLItTwBOZ1otnAxk0itvpl/kVNkWOQQZZT3/VlJPovJBCEN9OJRk\nOYJSkc+1zyg/edjiwzAxjLVBqoqSpz+5Z6DL2GqvFpyaqlV1yJ48rzVnT47qoACJ\na2Y+f0ymkvgkSX8llDMGfuLPeJJr0Q7foFDcjxzp2h5c63xxyEFe7TQZzpEH1/yd\nGG9ZWp1rliQKTl0CerpZi2YKR/eP4cr0X/BOiKEw6M4toOZHUPN3Y0ng4JD2M66V\nfkGgzQbvbZWuNiJ9qGxDKToN2A72XVgHvicXWVclGN48H4c/Lz1GeowCgq7+9R8A\nrfW+JBsRAgMBAAECggEAAq3KBdyI27/gb0wRSFl81rxEW9FooOByivhzmAKNdvXl\nWcbbUEHQHdhfN2xQiSMioodm0wEYD4jgPxAxcB47Pl/VPGZCw+WJnJ1DfrfrvFKB\nsTr5RbQHgAOoADWgNOWBDemgjqgS4y09SifZ4ChIYutBpbEjrT9KXZOyS9WHtXUr\nCeO02drhQUGyEH2SwV2Eg0HmVgkwHRhOZeinw1S0LTereNZ27l46CeeXjpVMvE8x\nrEj5f/ob8HBv41zRXrrWaTjS80tIaF9dxdA8fyYZmSVe/H1GRrpFc5JMDshe8sot\nXYynXvPuoGermgEg6f0L+cf4YJbCZQRMW1sC/ZToTwKBgQDur8KtRzuk8/Szow5V\nx1qQJk7f7W8wvPmN5k3wssJfyLyBjNfbcwrM2ZlKqOpaf0PAEwmM/f0a1DKQT7BS\nA5fO0kq6GvC6XRfFcD/A0So2AW6fuFmAQu5GOz5fdg44PC7FeOyHW0KplZM3D2LO\nDcf/hb9NclkjuD5osS6FY6RJhwKBgQDOyhjpWjnqFpH8QT7E7WpGzzyMAmJIMyKg\nW9T6H075Ys9aIIttbwel2FOpFbEJsq9XaWs4cEyKmxU6/MZeAOw5925ruvJ01Lew\nP7iEo4OuUyNKb/aEHWxY+iThagf/ZA7nppoJjZdw2TqvDcBZUwGZlKXuBUgwTYDR\nQrLl8n+8pwKBgQCiqcdbfZspPFR8g9gGH1kZufGw68gGCBNuYBCnw7txuYS2KT0G\nQi2PE5BDcEBeMjMC2DZ/Dq0KNqjK7nP0QJyZh3kDwc5iw4SqumfISQOiUHGKigD8\nxyBJXqCQQA1Kx8D8NP/E8y3IEraEJIkqcfvlqMmJxy72h96ITI+uugxBSwKBgQCi\nu1v7V2u4Eeb0covpAUTfUHq/W6joVIVtWJcz9qt5ig7PSEkw521HUAQWTeGyVhGy\nYl1kXst9UCnW79FTbLp5q4QT91ySIEwlwR9+EgewifB9xbpjoZwAMWoQkhaVHrK0\nDeGunuSMhAawd8vk/3OE3vvtYe67RGKZSznpx3pKhQKBgQCwKfTwqkshXfLeU37j\njKokcb44BlK6EIbQjOFNa74QwpOiSqOZQtLr8zLLy1uorawvJS+R69ot9gXeotf2\n5YlHK7XMFZ3BUaEWYfT53eG423EzSkZoljRgDgWD7oOQrIkBclZrA1HHurojuA9h\n52mW7Q83ZMkBKHof1XyMd9KwAA==\n-----END PRIVATE KEY-----\n"
   var firestore = FirestoreApp.getFirestore(email, key, projectId);
  
  // get document data from ther spreadsheet
   var sheet = SpreadsheetApp.getActiveSheet();
   // get the last row and column in order to define range
   var sheetLR = sheet.getLastRow(); // get the last row
   var sheetLC = sheet.getLastColumn(); // get the last column

   var dataSR = 2; // the first row of data
   // define the data range
   var sourceRange = sheet.getRange(2,1,sheetLR-dataSR+1,sheetLC);

   // get the data
   var sourceData = sourceRange.getValues();
   // get the number of length of the object in order to establish a loop value
   var sourceLen = sourceData.length;
  
  // Loop through the rows
   for (var i=0;i<sourceLen;i++){
     if(sourceData[i][1] !== '') {
       var data = {};
       var dateSt = sourceData[i][0].toString();
       var stDate = new Date(dateSt);
       var stringfied = JSON.stringify(stDate);
       var updatedDt = stringfied.slice(1,11);

       data.date = updatedDt;
       data.matricula = sourceData[i][0];
       data.nome = sourceData[i][1];
       data.cpf_cnpj = sourceData[i][2];
       data.endereco = sourceData[i][3];
       data.endereco_numero = sourceData[i][4];
       data.complemento = sourceData[i][5];
       data.endereco_bairro = sourceData[i][6];
       data.endereco_cidade = sourceData[i][7];
       data.endereco_cidade = sourceData[i][8];
       data.endereco_cep = sourceData[i][9];
       data.endereco_estado = sourceData[i][10];
       data.nome_do_contato = sourceData[i][11];
       data.obs = sourceData[i][12];
       data.latitude = sourceData[i][13]; 
       data.longitude = sourceData[i][14];
       data.data_criado = sourceData[i][15];
       data.usuario_criador = sourceData[i][16];
       data.data_modificado = sourceData[i][17];
       data.usuario_modificado = sourceData[i][18];
    
       firestore.createDocument("clientes-teste",data);

     }
    
  }
}

