Here is the documentation for my Github.

GitHub Workflows: This component orchestrates the automated processes that facilitate software development practices, including integration, testing, and deployment, contingent upon modifications to the codebase. The directional flow designated as "North-South" signifies the bi-directional interaction between the developers committing code and the GitHub Workflows.

Container Registry: This repository maintains the container images which have been synthesized through the build pipeline. These encapsulated images are in a state primed for retrieval and subsequent deployment within containerized application environments.

Container App: This term encapsulates the instantiation of the application encapsulated within containers, operational within the prescribed environment. In the context of this architecture, it pertains to API2.

Web App: This user-facing component serves as the interface through which end-users engage. The "North-South" directional indicator underscores the fact that the Web App mediates communication with users across the external network interface.

Function App: Functioning as a serverless computational entity, this application executes backend logic in direct response to a plethora of triggers, which may include but are not limited to HTTP requests, database modifications, or queue messages. In this framework, it is denoted as API1, interfacing with both the Container App and the Web App.

Users: These are the individuals who utilize the Web App, interfacing with it across the "North-South" demarcation, typically via internet connectivity.

Resource Group: This construct represents an organizational unit within cloud infrastructure that aggregates correlated resources for streamlined management and deployment of applications.

East-West Networking Boundaries: Within this delineation, all "East-West" marked arrows depict intra-network communication, implying an exchange of data transpiring internally and not traversing beyond the bounds of the external internet.

Queue storage pipeline:The API1 Azure function will push messages into queue storage. https://cs519api1test.azurewebsites.net
Whenever API1 receives a call (using HTTPS GET), it retrieves SECRET2 from the environment variables (originally sourced from Azure Key Vault). API1 then logs this information and places it into the Azure Queue Storage named "api1queue". The API2 Azure Container keeps an eye on the "api1queue" queue storage. As soon as a message lands in the "api1queue" queue storage, API2 captures and logs that message.