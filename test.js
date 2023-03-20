import express from "Express";
let app = express();

app.get("/", function(req, res){
res.send("Hello");
});

app.get('/:sr', function(req, res) {
    let sr = req.params.sr;
    res.redirect('https://www.google.com/search?q=' +  sr);
});

app.listen(3000, function(){
console.log("ok");
});