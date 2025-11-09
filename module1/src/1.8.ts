//object destructuring

const user = {
    id: 345,
    name: {
        firstName: 'Rudra',
        middleName: 'Protap',
        lastName: 'Chakraborty'
    },
    contactNo: '1234567890',
    address: 'India'
}

const {contactNo, name: {middleName}} = user;

//array destructuring

const myFriends = ['chandler', 'joey', 'rachel', 'monica', 'phoebe']

const [,, bestFriend, ...rest] = myFriends
