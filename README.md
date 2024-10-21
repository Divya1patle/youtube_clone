HOC-> It takes a component and return a modification of it.
it takes and existing component and modifies a little.

install tailwind css
install router
install react-icons

For Redux
1) Installl redux toolkit
2) install react redux
3) created our store
4) slice
5) we provides store to our app.

add redux store for sidebar functionality
header inside dispatch
redux check -> inspector 

for video container i get data from api not hardcoded.
website-> youtube videos api

constant file-> api and api key
api key->you tube api key auth->crendential page->create crendetial->Api key
api->video->list->list most popular video->click and get api

Note: After calling api so api is not working because we need to enable this api
website:https://console.cloud.google.com/apis/api/youtube.googleapis.com/metrics?project=seismic-sweep-437207-n8
->Library->check there youtube v3 api -> and click on it and enable then only api will work.

Note: afetr fetching data and on time of dispaly in ui so must play with only one data then map it.


In api only 5 data is given now i am going to take more data.
api:"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + GOOGLE_API_KEY;

After added maxResults: "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

we have in api US now i am going to change to india. US TO IN

