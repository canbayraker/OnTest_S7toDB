const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MachineStateSchema = new Schema({

    Id: {
        type       :   Number
    },
    Machine: {
        M1       :   Number,
        M2       :   Number,
        M3       :   Number,
        M4       :   Number,
        M5       :   Number,
        M6       :   Number,
        M7       :   Number,
        M8       :   Number,
        M9       :   Number,
        M10       :   Number,
        M11       :   Number,
        M12       :   Number,
        M13       :   Number,
        M14       :   Number,
        M15       :   Number,
    }
});

module.exports = mongoose.model("MachineState",MachineStateSchema);