const problems = [
    {
      serialNo: 1,
      title: "Two Sum",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      likes: 2000,
      dislikes: 500,
      examples: [
        {
          input: [2, 7, 11, 15],
          output: [0, 1]
        },
        {
          input: [3, 2, 4],
          output: [1, 2]
        }
      ],
      constraints: "time: O(n)",
      tags: 'array',
      sample_args: [[[2, 7, 11, 15], 9], [[3, 2, 4], 6]],
      sample_output: [[0,1], [1, 2]],
      solution: 'check target'
    },
    {
      serialNo: 2,
      title: "Add Two Numbers",
      description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      difficulty: "Medium",
      likes: 3000,
      dislikes: 800,
      examples: [
        {
          input: [2, 4, 3],
          output: [5, 6, 4]
        },
        {
          input: [0],
          output: [0]
        }
      ],
      constraints: "time: O(n)",
      tags: 'array'
    },
    {
      serialNo: 3,
      title: "Longest Substring Without Repeating Characters",
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      difficulty: "Hard",
      likes: 5000,
      dislikes: 1200,
      examples: [
        {
          input: "abcabcbb",
          output: 3
        },
        {
          input: "bbbbb",
          output: 1
        }
      ],
      constraints: "1 <= s.length <= 10^5, s consists of printable ASCII characters.",
      tags: 'array',
      sample_args: [[2, 7, 11, 15], 9],
      sample_output: [0,1]
    },
    {
      serialNo: 4,
      title: "Median of Two Sorted Arrays",
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      difficulty: "Hard",
      likes: 4000,
      dislikes: 1000,
      examples: [
        {
          input: [[1, 3], [2]],
          output: 2.0
        },
        {
          input: [[1, 2], [3, 4]],
          output: 2.5
        }
      ],
      constraints: "time: O(n)",
      tags: 'array',
      sample_args: 'abcabcbb',
      sample_output: 3
    },
    {
      serialNo: 5,
      title: "ZigZag Conversion",
      description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility).",
      difficulty: "Medium",
      likes: 1500,
      dislikes: 400,
      examples: [
        {
          input: ["PAYPALISHIRING", 3],
          output: "PAHNAPLSIIGYIR"
        },
        {
          input: ["PAYPALISHIRING", 4],
          output: "PINALSIGYAHRPI"
        }
      ],
      constraints: "1 <= s.length <= 10^5, s consists of printable ASCII characters.",
      tags: 'binaryTree'
    },
    {
      serialNo: 6,
      title: "Reverse Integer",
      description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
      difficulty: "Easy",
      likes: 4000,
      dislikes: 800,
      examples: [
        {
          input: 123,
          output: 321
        },
        {
            input: 489,
            output: 984
        }
      ],
      constraints: "time: O(n)",
      tags: 'binaryTree'
    },
    {
        "serialNo": 7,
        "title": "Remove Duplicates from Sorted Array",
        "description": "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
        "difficulty": "Easy",
        "likes": 3245,
        "dislikes": 387,
        "examples": [
          {
            "input": [0,0,1,1,1,2,2,3,3,4], 
            "output": 5
          },
          {
            "input": [1,1,2], 
            "output": 2
          }
        ],
        constraints: "time: O(n)",
        tags: 'binaryTree'
      },
    {
        "serialNo": 8,
        "title": "Search Insert Position",
        "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        "difficulty": "Easy",
        "likes": 2111,
        "dislikes": 256,
        "examples": [
          {
            "input": [1,3,5,6], 
            "output": 2
          },
          {
            "input": [1,3,5,6], 
            "output": 4
          }
        ],
        constraints: "time: O(n)",
        tags: 'binaryTree'
    },
    {
        serialNo: 9,
        title: "Find the kth largest element in an array",
        description: "Given an unsorted array of integers, find the kth largest element in the array.",
        difficulty: "Medium",
        likes: 2184,
        dislikes: 623,
        examples: [
          {
            input: [3, 2, 1, 5, 6, 4],
            output: 5
          },
          {
            input: [3, 2, 3, 1, 2, 4, 5, 5, 6],
            output: 4
          }
        ],
        constraints: "time: O(n)",
        tags: 'array'
    },
    {
        serialNo: 10,
        title: "Implement a stack using a queue",
        description:
          "Implement the following operations of a stack using queues: push(x), pop(), top(), and empty().",
        difficulty: "Medium",
        likes: 2852,
        dislikes: 753,
        examples: [
          {
            input: "stack = Stack()\nstack.push(1)\nstack.push(2)\nstack.top()",
            output: "2",
          },
          {
            input: "stack = Stack()\nstack.push(1)\nstack.push(2)\nstack.pop()\nstack.top()",
            output: "1",
          },
        ],
        constraints: "time: O(n)",
        tags: 'array'
      },
      {
        serialNo: 11,
        title: "Validate Binary Search Tree",
        description:
          "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        difficulty: "Medium",
        likes: 5999,
        dislikes: 483,
        examples: [
          {
            input: "tree = [2,1,3]",
            output: "true",
          },
          {
            input: "tree = [5,1,4,null,null,3,6]",
            output: "false",
          },
        ],
        constraints: "time: O(n)",
        tags: 'array'
      },
      {
        serialNo: 12,
        title: "Reverse a String",
        description:
          "Write a function that reverses a string. The input string is given as an array of characters s.",
        difficulty: "Easy",
        likes: 8285,
        dislikes: 149,
        examples: [
          {
            input: 's = ["h","e","l","l","o"]',
            output: '["o","l","l","e","h"]',
          },
          {
            input: 's = ["H","a","n","n","a","h"]',
            output: '["h","a","n","n","a","H"]',
          },
        ],
        constraints: "1 <= s.length <= 10^5, s consists of printable ASCII characters.",
        tags: 'array'
      }
]

export default problems;
  