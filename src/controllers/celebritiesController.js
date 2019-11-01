const {CelebrityModel} = require('../models')

const CelebrityIndex = (req, res) => {
  CelebrityModel
    .find( { } )
    .then( 
      (celebs) => {
        const prettyCeleb = celebs.map(
          (celeb)=>{
            return {
              id: celeb.id,
              name: celeb.name,
              occupation: celeb.occupation,
              catchPhrase: celeb.catchPhrase
            }
          }
        )
    res.render("celebrities/index",{prettyCeleb})
  }
  )
};

const CelebrityIndexPost = (req, res) => {
  let newCeleb = req.body
  console.log(newCeleb)
  CelebrityModel.create(newCeleb)
  .then((justCreated) => {
    console.log(res)
    res.redirect(`celebrity/${justCreated.id}`)
  }
  )
};

const CelebrityShow =  (req, res) => {
  const {id} = req.params
    CelebrityModel
      .findOne( { _id: id } )
      .then(
        celeb => {
          const prettyCeleb = {
            id: celeb.id,
            name: celeb.name,
            occupation: celeb.occupation,
            catchPhrase: celeb.catchPhrase
          }
        res.render('celebrities/show', prettyCeleb)
        }
      )
      .catch(err => {res.send(err)})
};

const CelebrityNew =  (req, res) => {
  res.render('celebrities/new', "")
};

const CelebrityUpdate = (req, res) => {
  const {id} = req.params
  CelebrityModel
    .findOne( { _id: id } )
    .then(
      celeb => {
        const prettyCeleb = {
          id: celeb.id,
          name: celeb.name,
          occupation: celeb.occupation,
          catchPhrase: celeb.catchPhrase
        }
        res.render('celebrities/update', prettyCeleb)
      }
    )
    .catch(err => res.send(err))
}

const CelebrityUpdatePost = (req, res) => {
  const {id} = req.params;
  let updateCeleb = req.body
  CelebrityModel.findByIdAndUpdate(id,
    {$set:{
      name:updateCeleb.name,
      occupation: updateCeleb.occupation,
      catchPhrase: updateCeleb.catchPhrase
      }},{new:true})
  .then( (updated) => {
    res.render("celebrities/show", updated)
  }
  )
    
};

const CelebrityDelete = (req, res) => {
  const {id} = req.params
  CelebrityModel.findByIdAndRemove(id, (err, data) => {
    err ? res.send("Request not complete, error: ", err) : res.redirect('/')
  });
};

module.exports = {
  CelebrityIndex,
  CelebrityIndexPost,
  CelebrityShow,
  CelebrityNew,
  CelebrityDelete,
  CelebrityUpdate,
  CelebrityUpdatePost
}