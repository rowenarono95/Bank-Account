// window.location.reload();

$(document).ready(function () {
  function BankAccount(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  BankAccount.prototype.deposit = function (amount) {
    return this.balance += amount;
  };

  BankAccount.prototype.withdraw = function (amount) {
    return this.balance -= amount;
  };

  var newAccount = new BankAccount("", 0);

  $("#register-form").submit(function (e) {
    e.preventDefault();
    var accountName = $("#name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    newAccount.balance = initialDeposit;
    newAccount.name = accountName;
    $("#current-balance").append(newAccount.balance);
    resetRegisterFields();
  });

  $("#withdraw-form").submit(function (e) {
    e.preventDefault();
    var amountWithdrawn = parseInt($("#withdraw").val());
    newAccount.withdraw(amountWithdrawn);
    $("#current-balance").empty();
    $("#current-balance").append(newAccount.balance);
    $("#withdraw").val("");
    resetWithdrawFields();
  });

  $("#deposit-form").submit(function (e) {
    e.preventDefault();
    var amountDeposited = parseInt($("#deposit").val());
    newAccount.deposit(amountDeposited);
    $("#current-balance").empty();
    $("#current-balance").append(newAccount.balance);
    $("#deposit").val("");
    resetDepositFields();
  });

  function resetRegisterFields() {
    $("#name").val("");
    $("#initial-deposit").val("");
  }

  function resetDepositFields() {
    $("#deposit").val("");
  }

  function resetWithdrawFields() {
    $("#withdraw").val("");
  }
});
