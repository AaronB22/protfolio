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
    if (data.email && (!data.email.includes("@") || !data.email.includes("."))) {
        errors.push("Email must be valid");
    }
    if (data.link && (!data.link.includes("https://linkedin.com/in/") || !data.link.includes("https://www.linkedin.com/in/"))) {
        errors.push("linkedIn link must be valid");
    }
    const meet_options=[
        "fair",
        "board",
        "linkedin"
    ]
    if (!meet_options.includes(data.meet)) {
        errors.push("Insert valid meet option");
    }
    const format_options=[
        'html',
        'text'
    ]
    if(!format_options.includes(data.format)){
        errors.push("Insert valid email format")
    }



    console.log(errors)
    return {
        isValid: errors.length === 0,
        errors
    }

}