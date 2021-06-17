function sheetsToFirestore() {
   const email = "victor@suite-service-app-16b2d.iam.gserviceaccount.com";
   const projectId = "suite-service-app-16b2d";
   const key = ""
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

