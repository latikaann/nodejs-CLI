const argv = require("yargs").argv;

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const getAllContacts = await contacts.listContacts();
      console.log(getAllContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokeAction({ action });
}

invokeAction(argv);
