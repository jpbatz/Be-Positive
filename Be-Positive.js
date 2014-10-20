BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    // give a random blood type to anyone
    // very bad idea!
    // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];

    var typeAvail = {};

    switch (patient.blood_type) {
      case "AB_POS" : {
        if(blood_inventory.AB_POS > 0) {
            typeAvail = BloodType.AB_POS;
        } else if(blood_inventory.AB_NEG > 0) {
            typeAvail = BloodType.AB_NEG;
        } else if(blood_inventory.A_POS > 0) {
            typeAvail = BloodType.A_POS;
        } else if(blood_inventory.A_NEG > 0) {
            typeAvail = BloodType.A_NEG;
        } else if(blood_inventory.B_POS > 0) {
            typeAvail = BloodType.B_POS;
        } else if(blood_inventory.B_NEG > 0) {
            typeAvail = BloodType.B_NEG;
        } else if(blood_inventory.O_POS > 0) {
            typeAvail = BloodType.O_POS;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "AB_NEG" : {
        if(blood_inventory.AB_NEG > 0) {
            typeAvail = BloodType.AB_NEG;
        } else if(blood_inventory.A_NEG > 0) {
            typeAvail = BloodType.A_NEG;
        } else if(blood_inventory.B_NEG > 0) {
            typeAvail = BloodType.B_NEG;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "A_POS" : {
        if(blood_inventory.A_POS > 0) {
            typeAvail = BloodType.A_POS;
        } else if(blood_inventory.A_NEG > 0) {
            typeAvail = BloodType.A_NEG;
        } else if(blood_inventory.O_POS > 0) {
            typeAvail = BloodType.O_POS;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "A_NEG" : {
        if(blood_inventory.A_NEG > 0) {
            typeAvail = BloodType.A_NEG;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "B_POS" : {
        if(blood_inventory.B_POS > 0) {
            typeAvail = BloodType.B_POS;
        } else if(blood_inventory.B_NEG > 0) {
            typeAvail = BloodType.B_NEG;
        } else if(blood_inventory.O_POS > 0) {
            typeAvail = BloodType.O_POS;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "B_NEG" : {
        if(blood_inventory.B_NEG > 0) {
            typeAvail = BloodType.B_NEG;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "O_POS" : {
        if(blood_inventory.O_POS > 0) {
            typeAvail = BloodType.O_POS;
        } else if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      case "O_NEG" : {
        if(blood_inventory.O_NEG > 0) {
            typeAvail = BloodType.O_NEG;
        } else {
            typeAvail = false;
        }
        break;
      }
      default: {
        return false;
      }
    } // end switch

    return typeAvail;

  } // end receive_Patient
}; // end BloodTransfusionRules
