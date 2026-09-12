const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const ledger = {
  "1": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: {
      name: "",
      email: ""
    },
    dueDate: ""
  }
};

function checkoutDevice(ledger, assetTag, borrower) {

  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));

  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;

  updatedLedger[assetTag].dueDate = borrower.dueDate || "";

  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {

  if (!ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Asset ${assetTag} was not found.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";

  updatedLedger[assetTag].dueDate = "";

  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} checked in.`
  };
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = [];

  function dateValue(dateString) {
    const parts = dateString.split("/");

    const month = Number(parts[0]);
    const day = Number(parts[1]);
    const year = Number(parts[2]);

    return year * 10000 + month * 100 + day;
  }

  const todayValue = dateValue(today);

  for (const assetTag in ledger) {
    const device = ledger[assetTag];

    if (
      device.status === "CheckedOut" &&
      device.dueDate &&
      dateValue(device.dueDate) < todayValue
    ) {
      overdueDevices.push(device);
    }
  }

  overdueDevices.sort(function (a, b) {
    return dateValue(a.dueDate) - dateValue(b.dueDate);
  });

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}