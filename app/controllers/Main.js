// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var add52 = false;


var coarseLocationPermission = "android.permission.READ_CONTACTS";
var hasStoragePerm = Ti.Android.hasPermission(coarseLocationPermission);

var permissionsToRequest = [];
Ti.API.info('===hasStoragePerm == ' + hasStoragePerm);


if(hasStoragePerm == false){
    Ti.API.info('== entra a pedir permiso');
    permissionsToRequest.push(coarseLocationPermission);
    Ti.Android.requestPermissions(permissionsToRequest, function(e) {
        if (e.success) {

            Ti.API.info('=== ok ');
        } else {
           
            Ti.API.info('=== No ');
        }
    });
}





/**
 * Funcion que carga la tabla de numeros
 * 
 * @param {Boolean} _add52 
 */
function getContacts(_add52){


    var people = Ti.Contacts.getAllPeople();
    var arrayContactos = [];

    if(people != null){
        for(i in people){

            var row = Ti.UI.createTableViewRow({
                height: Ti.UI.SIZE,
                width: '100%',
                layout: 'vertical',
                data: people[i],
            });

            var labelName = Ti.UI.createLabel({
                text: people[i].fullName,
                top: 5,
                left: 5,
                height: Ti.UI.SIZE,
                color: 'black',
                font: {
                    fontSize: 20,
                    fontWeight: 'bold',
                }
            });
            
            row.add(labelName);
            

            if(people[i].phone.mobile != undefined){
                for(j in people[i].phone.mobile){

                    var valueTouchMobile = (deleteSpaces(people[i].phone.mobile[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchMobile
                    });
                    var titlePhone = Ti.UI.createLabel({
                        text: cleanOriginal(people[i].phone.mobile[j]) + ' -> ' + ((deleteSpaces(people[i].phone.mobile[j]).length < 10) ? deleteSpaces(people[i].phone.mobile[j]) : (((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.mobile[j]))),
                        top: 0,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchMobile,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.mobile[j]) + ', ' + valueTouchMobile);
                    viewPhone.add(titlePhone);
                    viewPhone.add(switchView);
                    row.add(viewPhone);      
                }
            }

            if(people[i].phone.home != undefined){
                for(j in people[i].phone.home){
                    var valueTouchHome = (deleteSpaces(people[i].phone.home[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchHome
                    });
                    var phoneHome = Ti.UI.createLabel({
                        text: cleanOriginal(people[i].phone.home[j]) + ' -> ' +     (( deleteSpaces(people[i].phone.home[j]).length < 10 ) ? deleteSpaces(people[i].phone.home[j]).length < 10 : ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.home[j])),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchHome,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.home[j]) + ', ' + valueTouchHome);
                    viewPhone.add(phoneHome);
                    viewPhone.add(switchView);
                    row.add(viewPhone);   
                }
            }

            if(people[i].phone.other != undefined){
                for(j in people[i].phone.other){
                    var valueTouchOther = (deleteSpaces(people[i].phone.other[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchOther
                    });
                    var phoneOther = Ti.UI.createLabel({
                        // text: 'other: ' + cleanOriginal(people[i].phone.other[j])  + ' -> ' + deleteSpaces(people[i].phone.other[j]),
                        text: cleanOriginal(people[i].phone.other[j])  + ' -> ' + ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.other[j]),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchOther,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.other[j]) + ', ' + valueTouchOther);
                    viewPhone.add(phoneOther);
                    viewPhone.add(switchView);
                    row.add(viewPhone);    
                }
            }

            if(people[i].phone.pager != undefined){
                for(j in people[i].phone.pager){
                    var valueTouchPager = (deleteSpaces(people[i].phone.pager[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchPager
                    });
                    var phonePager = Ti.UI.createLabel({
                        // text: 'pager: ' + cleanOriginal(people[i].phone.pager[j]) + ' -> ' + deleteSpaces(people[i].phone.pager[j]),
                        text: cleanOriginal(people[i].phone.pager[j]) + ' -> ' + ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.pager[j]),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchPager,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.pager[j]) + ', ' + valueTouchPager);
                    viewPhone.add(phonePager);
                    viewPhone.add(switchView);
                    row.add(viewPhone);
                }
            }

            if(people[i].phone.work != undefined){
                for(j in people[i].phone.work){
                    var valueTouchWork = (deleteSpaces(people[i].phone.work[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchWork
                    });
                    var phoneWork = Ti.UI.createLabel({
                        // text: 'work: ' + cleanOriginal(people[i].phone.work[j]) + ' -> ' + deleteSpaces(people[i].phone.work[j]),
                        text: cleanOriginal(people[i].phone.work[j]) + ' -> ' + ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.work[j]),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchWork,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.work[j]) + ', ' + valueTouchWork);
                    viewPhone.add(phoneWork);
                    viewPhone.add(switchView);
                    row.add(viewPhone);
                }
            }

            if(people[i].phone.workFax != undefined){
                for(j in people[i].phone.workFax){
                    var valueTouchWorkFax = (deleteSpaces(people[i].phone.workFax[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchWorkFax
                    });
                    var phoneWorkFax = Ti.UI.createLabel({
                        // text: 'workFax: ' + cleanOriginal(people[i].phone.workFax[j]) + ' -> ' + deleteSpaces(people[i].phone.workFax[j]),
                        text: cleanOriginal(people[i].phone.workFax[j]) + ' -> ' + ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.workFax[j]),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchWorkFax,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.workFax[j]) + ', ' + valueTouchWorkFax);
                    viewPhone.add(phoneWorkFax);
                    viewPhone.add(switchView);
                    row.add(viewPhone);
                }
            }

            if(people[i].phone.homeFax != undefined){
                for(j in people[i].phone.homeFax){
                    var valueTouchHomeFax = (deleteSpaces(people[i].phone.homeFax[j]).length <= 9) ? false : true;
                    var viewPhone = Ti.UI.createView({
                        top: 5,
                        height: Ti.UI.SIZE,
                        touchEnabled: valueTouchHomeFax
                    });
                    var phoneHomeFax = Ti.UI.createLabel({
                        // text: 'homeFax: ' + cleanOriginal(people[i].phone.homeFax[j]) + ' -> ' + deleteSpaces(people[i].phone.homeFax[j]),
                        text: cleanOriginal(people[i].phone.homeFax[j]) + ' -> ' + ((_add52 == true) ? '+52' : '') + deleteSpaces(people[i].phone.homeFax[j]),
                        top: 5,
                        left: 20,
                        height: Ti.UI.SIZE,
                        color: 'black',
                        touchEnabled: false,
                    });
                    var switchView = Ti.UI.createSwitch({
                        right: 0,
                        touchEnabled: false,
                        value: valueTouchHomeFax,
                    });
                    Ti.API.info('number: ' + deleteSpaces(people[i].phone.homeFax[j]) + ', ' + valueTouchHomeFax);
                    viewPhone.add(phoneHomeFax);
                    viewPhone.add(switchView);
                    row.add(viewPhone);
                }
            }
            

            if(
                people[i].phone.mobile != undefined ||
                people[i].phone.home != undefined ||
                people[i].phone.other != undefined ||
                people[i].phone.pager != undefined ||
                people[i].phone.work != undefined ||
                people[i].phone.workFax != undefined ||
                people[i].phone.homeFax

            ){
                arrayContactos.push(row);
            }
            
        }
    }



    // $.label.text = texto;

    $.tableMain.data = arrayContactos;
    // Ti.API.info('== people == ' + JSON.stringify(people));
}










function deleteSpaces(_number){
    var str = _number  
    str = str = str.replace(/ /g,''); 
    str = str = str.replace("(",''); 
    str = str = str.replace(")",''); 
    str = str = str.replace("-",''); 

    if(str.length > 10){
        str = str.substring( (Number(str.length) - 10) , str.length);
        str = str;
    }

    return str ;
}

function cleanOriginal(_number){
    var str = _number  
    str = str = str.replace(/ /g,''); 
    str = str = str.replace("(",''); 
    str = str = str.replace(")",''); 
    str = str = str.replace("-",''); 

    return str ;
}



getContacts(add52);

$.labelAdd.addEventListener('click', function(e){
    if(add52 == true){
        add52 = false;
    }else{
        add52 = true;
    }
    getContacts(add52);
});