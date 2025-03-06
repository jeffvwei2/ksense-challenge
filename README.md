# KSense Challenge
Applicant: Jeffrey Wei

Description: 

This simple API will receive the KSense Challenge payload at POST '/webhook'. It will store all received requests.

The list of received requests may then be retrieved at GET '/submissions'.

Secret Payload results:

I used render.com's free tier to host my service as it is a super simple API. I was able to successfully test POST and GET requests I made before trying the Challenge's payload. The challenge errored out sending the payload.  Render's free tier is inconsistent and can be quite slow at times though, so I believe it just timed out and cancelled the request. Clicking "submit" again did send a successful payload - albeit an empty "{}", since the initial payload had already been triggered. I was able to retrieve this empty payload along with my test ones afterwards though. 
