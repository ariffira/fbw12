let output=(name,email,message)=>{
    return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email</title>
                </head>
                <body>
                <div style="background-color:black;">
                <div style="background-color:#545443; text-center text-success" style=" padding:30px;margin:0 auto;">
                 <b>
                    <h1 class="text-success text-center alert alert-success m-auto p-5 ;" style="height: 400px;">You recived message from ${name} </h1>
                    <section style="margin:0 auto;">
                    <h3 style="color:purple;Text-align:center;"><u>Contact Details</u></h3>
                   
                    <div style="background-color: #9f9f9f;">
                    <h2>Hello I am ${name}</h2>
                      <i style="color:pink;"><strong>I need some information about your ...</strong></i>
                      <h3 style="color:green;"><strong>Email:</strong>  <b>Please send me your replay to this email </b><u>${email}</u></h3>
                      <h2><p style="color:green;font-size:16x;"><strong style="color:red;">Message:</strong> <br>${message}</p></h2>
                    </div>
                    <br><br>
                 </section>
                please replay to this email <a href="#">${email}</a>
                </b>
            </div>
        </div>
        <br>
        <br>
    </body>
    
    </html>`
    }
    
    module.exports=output;