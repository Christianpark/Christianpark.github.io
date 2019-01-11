// 1.Define localeName and localeMode 
var localeName = 'en',
    localeMode = {
        head:{
            nick:'NickName',
            mail:'E-Mail',
            link:'Website(http://)',
        },
        tips:{
            comments:'Comments',
            sofa:'No comments yet.',
            busy:'Submit is busy, please wait...',
            again:'Sorry, this is a wrong calculation.',
            limit:'The largest number of words %d'
        },
        ctrl:{
            reply:'Reply',
            ok:'Ok',
            sure:'Sure',
            cancel:'Cancel',
            confirm:'Confirm',
            continue:'Continue',
            more:'Load More...',
            try:'Once More?',
        },
        error:{
            99:'Initialization failed, Please check the `el` element in the init method.',
            100:'Initialization failed, Please check your appId and appKey.',
            401:'Unauthorized operation, Please check your appId and appKey.',
            403:'Access denied by api domain white list, Please check your security domain.',
        },
        timeago:{
            seconds:'seconds ago',
            minutes:'minutes ago',
            hours:'hours ago',
            days:'days ago',
            now:'just now'
        }
    };

var valine = new Valine();
// 2. Installation language:
valine.installLocale(localeName,localeMode)
// 3.Initialization Valine
valine.init({
    el:'#vcomment',
    appId:'<APP_ID>',
    appKey:'<APP_KEY>',
    lang:localeName
})