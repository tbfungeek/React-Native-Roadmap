import capitalize from '../utils/capitalize';

const mapContact = contact => {
  const {
    name, picture, phone, cell, email,
  } = contact;

  return {
    id: self.Random(1,1000),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
  };
};

export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  const contactData = await response.json();

  return contactData.results.map(mapContact);
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const userData = await response.json();
  return mapContact(userData.results[0]);
};

function Random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
