import { test, expect } from '@playwright/test';

// E2E Scenario: CompleteUserLifecycle-e2e
// Description: No description provided

test.describe('CompleteUserLifecycle-e2e', () => {
  test('should execute complete scenario successfully', async ({ request }) => {
    const baseURL = 'https://petstore.swagger.io/v2';
    let scenarioContext = {};


    // Step 1: POST /pet/{petId}/uploadImage
    console.log('Executing step 1: POST /pet/{petId}/uploadImage');
    
    const step1Response = await request.post(`${baseURL}/pet/{petId}/uploadImage`, {
      data: {},
      headers: {
        'Content-Type': 'application/json',
        // Add your authentication headers here
      }
    });
    
    expect(step1Response.ok()).toBeTruthy();
    console.log('Step 1 completed with status:', step1Response.status());
    
    const step1Data = await step1Response.json();
    console.log('Step 1 response:', step1Data);
    
    // Store response data for next steps
    scenarioContext.step1 = step1Data;

    // Step 2: POST /pet
    console.log('Executing step 2: POST /pet');
    
    const step2Response = await request.post(`${baseURL}/pet`, {
      data: {},
      headers: {
        'Content-Type': 'application/json',
        // Add your authentication headers here
      }
    });
    
    expect(step2Response.ok()).toBeTruthy();
    console.log('Step 2 completed with status:', step2Response.status());
    
    const step2Data = await step2Response.json();
    console.log('Step 2 response:', step2Data);
    
    // Store response data for next steps
    scenarioContext.step2 = step2Data;

    
    console.log('E2E Scenario completed successfully!');
  });
});