import { test, expect } from '@playwright/test';

// E2E Scenario: E2E_REQRES_USERS
// Description: No description provided

test.describe('E2E_REQRES_USERS', () => {
  test('should execute complete scenario successfully', async ({ request }) => {
    const baseURL = 'https://reqres.in';
    let scenarioContext = {};


    // Step 1: GET /api/users
    console.log('Executing step 1: GET /api/users');
    
    const step1Response = await request.get(`${baseURL}/api/users`, {
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

    // Step 2: GET /api/users/{id}
    console.log('Executing step 2: GET /api/users/{id}');
    
    const step2Response = await request.get(`${baseURL}/api/users/{id}`, {
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