import Tv from './Tv';
import Email from './Email';
import MailList from './MailList';

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();

tv1.connectedTo = 'Wifi';
console.log('Connected to: ', tv1.connectedTo);

tv1.connectedTo = 'USB';

const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  "There's a new car wash in town.Did you know?",
  'Car wash'
);

const email2 = new Email(
  friendEmail,
  myEmail,
  'Great! My car is really dirty.How much do they charge?',
  'Reply - Car wash'
);

const email3 = new Email(
  myEmail,
  friendEmail,
  '$5.00, and you get a free polishing cloth',
  'Reply - Reply - Car wash'
);

const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
  'Day off monday'
);

const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'The entire company will have a day off on monday =D',
  'Reply - Day off monday'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log(
  "-------- personalMailList.getEmailsSentBy('me@personalmail.com'):"
);

personalMailList
  .getEmailsSentBy(myEmail)
  .forEach((mail) => console.log(mail.content));

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  `Oh yes!
  My boss says we\'ll have Monday off.
  Want to go to the movies?`,
  'Day off monday'
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5);

console.log("-------- personalMailList.getEmailsBySubject('Day off'):");

personalMailList
  .getEmailsBySubject('Day off')
  .forEach((mail) => console.log(mail.content));

personalMailList.removeEmail(email5);

console.log('-------- professionalMailList.all:');

professionalMailList.all.forEach((mail) => console.log(mail.content));

console.log('-------- personalMailList.all:');

personalMailList.all.forEach((mail) => console.log(mail.content));
