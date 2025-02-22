export const fetchContests = async () => {
    try {
      // Fetch Codeforces contests
      const cfResponse = await fetch('https://codeforces.com/api/contest.list');
      const cfData = await cfResponse.json();
      
      const codeforcesContests = cfData.result
        .filter(c => c.phase === 'BEFORE')
        .map(c => ({
          name: c.name,
          platform: 'Codeforces',
          startTime: c.startTimeSeconds * 1000,
          endTime: (c.startTimeSeconds + c.durationSeconds) * 1000,
          duration: c.durationSeconds,
          url: `https://codeforces.com/contests/${c.id}`
        }));
  
      // Add other platforms' mock data (replace with real API calls)
      const mockContests = [
        {
          name: 'Weekly Contest 350',
          platform: 'LeetCode',
          startTime: Date.now() + 86400000,
          endTime: Date.now() + 86400000 + 7200000,
          duration: 7200,
          url: 'https://leetcode.com/contest'
        },
        {
          name: 'May Cook-Off 2023',
          platform: 'CodeChef',
          startTime: Date.now() + 172800000,
          endTime: Date.now() + 172800000 + 10800000,
          duration: 10800,
          url: 'https://codechef.com'
        }
      ];
  
      return [...codeforcesContests, ...mockContests].sort((a, b) => a.startTime - b.startTime);
    } catch (error) {
      console.error('Error fetching contests:', error);
      return [];
    }
  };