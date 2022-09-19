
import HomePage from "../pages/home.page"

class SanityTestData {

    static TC001_AppData = {
      'type'    : '',
      'name'    : 'CyTest App1' + ' - ' + HomePage.getFormattedDate(),
      'desc'    : 'App Description',
      'url'     : 'www.smaato.com',
      'category': 5,
      'button'  : 'Save & Create New Adspace'
    }

    static TC001_AdSpaceData = {
      'name'      : 'CyTest Adspace1' + ' - ' + HomePage.getFormattedDate(), 
      'desc'      : 'Adspace Description goes here', 
      'adformat'  : '1', 
      'dimension' : '2',

      'category'  : '5', 
      'position'  : '2', 
      'sxDemand'  : 'Yes', 
      'button'    : 'Save'
    }

    static TC002_OrderData = {
      'name'        : 'CyTest Order1' + ' - ' + HomePage.getFormattedDate(), 
      'advertiser'  : 'CyTest Advertiser1', 
      'desc'        : 'CyTest Description', 
      'statusPaused': '', 
      'button'      : 'Save'
    }
    static TC002_AppData = {
      'type'    : '',
      'name'    : 'app1' + ' - ',
      'desc'    : '',
      'url'     : 'www.smaato.com',
      'category': 5
    }
    
  }
  export default SanityTestData