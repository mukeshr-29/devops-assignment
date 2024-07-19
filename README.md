Overview                                                                                                                                                                                   
This project involves deploying an Ollama service on Kubernetes, setting up Horizontal Pod Autoscaler (HPA), and conducting load testing. The goal is to ensure that the service scales effectively under various load conditions and meets performance requirements.

Implementation
1. Deployment
Service Deployment:
A Kubernetes deployment has been created for the application service with two replicas.
The deployment is defined in deployment.yaml.

2. Service Configuration
Service Definition:
A LoadBalancer service is set up to expose the service to the external network.
The service configuration is in service.yaml.

Horizontal Pod Autoscaler (HPA):
An HPA is configured to scale the Ollama deployment based on CPU utilization.
The HPA configuration is in hpa.yaml.

CI/CD Pipeline                                                                                                                                                                             
In this task I have used GitHub actions as my ci/cd tool. The CI/CD pipeline using GitHub Actions automates the process of building, testing, and deploying the service. By adhering to best practices and utilizing automated workflows, you can ensure efficient and reliable deployments.

Kubectl Commands used                                                                                                                                                                      
kubectl apply -f deployment.yaml -n devops-assignment                                                                                                                                      
kubectl apply -f service.yaml -n devops-assignment                                                                                                                                         
kubectl apply -f hpa.yaml -n devops-assignment                                                                                                                                             

k6 Load test commands used                                                                                                                                                                 
k6 run <test-script-file_name>
![Screenshot 2024-07-19 200002](https://github.com/user-attachments/assets/824f3cc6-9c26-4186-8243-93148b9c4b83)
![Screenshot 2024-07-19 200226](https://github.com/user-attachments/assets/d195d9ae-8066-4176-9352-f64a090d4582)
![Screenshot 2024-07-19 195846](https://github.com/user-attachments/assets/5e7a0904-edf3-447a-9ccd-c9b45ca0d7ef)
![Screenshot 2024-07-19 200650](https://github.com/user-attachments/assets/2c621dba-4926-42e2-a658-680231e3b540)
![Screenshot 2024-07-19 200335](https://github.com/user-attachments/assets/81c0129c-11be-475e-aff3-21ad5a88db63)


Conclusion                                                                                                                                                                                 
This project demonstrates the deployment and scaling of a service using Kubernetes and load testing to ensure performance and stability. By following the documented best practices and setup instructions, you can reproduce the setup and perform similar testing.








