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

module.exports = {
  CelebrityIndex,
  CelebrityIndexPost,
  CelebrityShow,
  CelebrityNew
}