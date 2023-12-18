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

    
}
















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