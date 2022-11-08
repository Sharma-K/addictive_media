const User = require('../models/users');


module.exports.add = async(req, res) => {

    res.render('input');
}

module.exports.addIn = async(req, res) => {
   
   
    const user = new User(req.body);
    user.resume = req.files.map(f => ({url: f.path, filename: f.filename}));
   await user.save();
  
   res.redirect('/listing');


}

module.exports.lists = async(req,res) =>{
  
 const allUsers = await User.find({});
    res.render('listing', {allUsers});
}


module.exports.deletet = async(req, res) => {
  const { id } = req.params;
  
  await User.findByIdAndDelete(id);
res.redirect('/listing');
  
  // res.send(id);
}

module.exports.sortd = async(req, res) => {

  const allUsers = await User.aggregate([{$sort : {_id: -1}}]);
  // res.redirect('/listing')
 res.render('listing', {allUsers});

}


module.exports.sortn = async(req, res) => {

 const allUsers = await User.aggregate([{$sort : {name: 1}}]);
//  res.redirect('/listing');
 res.render('listing', {allUsers});

}
