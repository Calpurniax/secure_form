import axios from 'axios';

export const getIp = async (req, res) => {
    try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ipClean = ipResponse.data.ip;
        console.log(ipClean)

        const infoApiResponse = await axios.get(`http://ip-api.com/json/${ipClean}`);
        return infoApiResponse       

        // const {
        //     country,
        //     countryCode,
        //     region,
        //     regionName,
        //     city,
        //     zip,
        //     lat,
        //     lon,
        //     timezone,
        //     isp,
        //     org,
        //     as,
        // } = infoApiResponse.data;

        // const ipAddress = validateIPAddress(publicIpAddress);
        // const requestMethod = validateRequestMethod(req.method);

        // const securityData = {
        //     timestamp: new Date(),
        //     ipAddress,
        //     requestPath: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
        //     requestMethod,
        //     bruteForceAttempt: false,
        //     ddosAttack: false,
        //     sqlInjectionAttempt: false,
        //     xssAttempt: false,
        //     isBlocked: false,
        //     infoApi: {
        //         country,
        //         countryCode,
        //         region,
        //         regionName,
        //         city,
        //         zip,
        //         lat,
        //         lon,
        //         timezone,
        //         isp,
        //         org,
        //         as,
        //     }
        // };

        
        //await createSecurityLog(res, securityData, next);

    } catch (error) {
        console.error('Error al crear el registro de seguridad:', error);
        //next(error);
    }
};