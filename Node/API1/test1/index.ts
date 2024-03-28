import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const name = (req.query.name || (req.body && req.body.name));
    const secret2Value = process.env.Secret2 || "Default Secret Value";
    const responseMessage = `Secret2 = ${secret2Value}`;
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    

};

export default httpTrigger;