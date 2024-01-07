const express = require('express');
// Invoking the router using express.Router:
const router = express.Router();

const { getPeople, createPerson, createPersonPostman,
    updatePerson, deletePerson} = require('../controllers/peopleController');


// Creating the get Method here:
// Changing the first word from app to router:
// router.get, router.post, router.put, router.delete:
// We already have the base which is /api/people:
// router.get('/', getPeople)
router.route('/').get(getPeople);

// Creating the post Method here:
// We already have the base route of /api/people:
// router.post('/',createPerson)
router.route('/').post(createPerson);

// Creating the post Method here:
// We already have the base route of /api/people:
// router.post('/postman', createPersonPostman)
router.route('/postman').post(createPersonPostman)

// Creating the put Method here for the request params /:id
// We already have the base route of /api/people:
// router.put('/:id',updatePerson)
// router.route('/:id').delete(deletePerson)---This will be chained since it is the Same Route:
router.route('/:id').put(updatePerson).delete(deletePerson)

// Creating the Delete Method here:
// We already have the base Route of /api/people:
// router.delete('/:id',deletePerson);
// router.route('/:id').delete(deletePerson)


// exporting the router Here using the module.exports = router:
module.exports = router;
