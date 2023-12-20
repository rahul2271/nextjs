// pages/api/submitForm.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body; // Assuming you're using the body-parser middleware
  
      // Process the form data as needed
      console.log('Form Data:', formData);
  
      // Respond with a success message
      return res.status(200).json({ message: 'Form data received successfully!' });
    }
  
    // If the request method is not POST
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  

// export default function data(req, res){
//     if(req.method === "POST"){
        
//     const reqClientData = req?.body;
    

//     console.log("req Data:", reqClientData);

//     return res.json({name: "rahul"});
//     }

//     return res.status(500).json({
//         msg: "hiiiiiiiiii "
//     })
// }


// export default function data(req, res) {
//     if (req.method === "POST") {
//         const reqClientData = req?.body;

//         if (!reqClientData) {
//             return res.status(400).json({ error: "Bad Request: Missing request body" });
//         }

//         console.log("req Data:", reqClientData);

//         return res.json({ name: "rahul" });
//     }

//     return res.status(405).json({
//         error: "Method Not Allowed: Only POST requests are accepted",
//     });
// }

// Assuming this is your server-side code
// export default function data(req, res) {
//     if (req.method === "POST") {
//       const reqClientData = req?.body;
  
//       if (!reqClientData) {
//         return res.status(400).json({ error: "Bad Request: Missing request body" });
//       }
  
//       console.log("req Data:", reqClientData);
  
//       return res.json({});
//     }
  
//     return res.status(405).json({
//       error: "Method Not Allowed: Only POST requests are accepted",
//     });
//   }
  
