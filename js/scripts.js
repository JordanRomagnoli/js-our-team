const profileList = [
    createNewProfile('Wayne Barnett', 'Founder & CEO', 'img/wayne-barnett-founder-ceo.jpg'),
    createNewProfile('Angela Caroll', 'Chief Editor', 'img/angela-caroll-chief-editor.jpg'),
    createNewProfile('Walter Gordon', 'Office Manager', 'img/walter-gordon-office-manager.jpg'),
    createNewProfile('Angela Lopez', 'Social Media Manager', 'img/angela-lopez-social-media-manager.jpg'),
    createNewProfile('Scott Estrada', 'Developer', 'img/scott-estrada-developer.jpg'),
    createNewProfile('Barbara Ramos', 'Graphic Designer', 'img/barbara-ramos-graphic-designer.jpg')
]; 


/* for(let i = 0; i < profileList.length; i++){

    console.log(profileList[i].name);
    console.log(profileList[i].role);
    console.log(profileList[i].immage);
} */

for(let i = 0; i < profileList.length; i++){

    for(let key in profileList[i]){

        console.log(key+': ', profileList[i][key]);
    }

    document.querySelector('.row').innerHTML += `
        <div class="col-6 text-center my-2 card p-2">
            <h2>${profileList[i]['name']}</h2>
            <h3>${profileList[i]['role']}</h3>
            ${profileList[i]['immage']}
        </div>
        `
};



//---- FUNTIONS --------------------------------------------------------

function createNewProfile(userName, userRole, userImmage){
    let newProfile = {
        name : userName,
        role : userRole,
        immage : `
            <img src="${userImmage}">
        `
    };

    return newProfile;
};