export function validateForm(data) {
    console.log('Validate form')
    console.log(data)


    /*
    {
      fname: 'Aaron',
      lname: 'Bailey',
      email: 'Bailey.Aaron@student.greenriver.edu',
      method: 'delivery',
      toppings: 'pepperoni',
      size: 'small',
      comment: '',
      discount: 'on'
    }
      */

    const errors = [];
    console.log(data)
    //validate fname
    if (data.fname.trim() == "") {
        errors.push("First name is required.");
    }
    if (data.lname.trim() == "") {
        errors.push("Last name is required.");
    }
    if (data.email && (!data.email.includes("@") || !data.email.includes("."))) {
        errors.push("Email must be valid");
    }
    if (data.link && !data.link.includes("https://linkedin.com/in/") || !data.link.includes("https://www.linkedin.com/in/")) {
        errors.push("linkedIn link must be valid");
    }
    if (data.meet.value === "none") {
        errors.push("Please entered how wee meet");
    }



    console.log(errors)
    return {
        isValid: errors.length === 0,
        errors
    }

}