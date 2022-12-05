

function myPrompt() {

    var people = prompt("How many guests do you have?");
    var table = prompt("How  many tables do you want?");

    var remainder_people = table % people        // number of people at  unfull table
    var full_table = people - remainder_people    // number of people sitting at full  tables
    var full_table_people = full_table / table      // number of people per full table
    var unassigned_people = people - (full_table_people * table)

    if (people % table ==0) {
        alert("Your " + people + " guests will be seated as follows: " + table + " tables of " + (people/table));

    }
    else {
        var table = (table - 1)                     // number of full tables
        var full_table = people - remainder_people    // number of people sitting at full  tables
        var full_table_people = Math.floor(full_table / table)      // number of people per full table
        var unassigned_people = people - (full_table_people * table)
        

        alert("Your " + people + " guests will be seated as follows: " + table + " tables of " + full_table_people + " and 1 table of " + unassigned_people);
    }

    


}