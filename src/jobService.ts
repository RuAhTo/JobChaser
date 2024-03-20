export interface Job {
    id: number;
    company: string;
    logo: string;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }

  export async function fetchJobs(): Promise<Job[]> {
    try {
      const response = await fetch('../jobs.json');
      if (!response.ok) {
        throw new Error('Request failed with status:' + response.status);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }