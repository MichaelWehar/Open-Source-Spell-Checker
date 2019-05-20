# Open Source Spell Checker
This is a free client-side spell checking library written in JavaScript.

- It is... Simple, Lightweight, Customizable, Fast, Client-side, Free

- It is **not**... Fully Supported, Perfect, Extremely Accurate, Neural Network-based

# More Details

- You may use this library freely, but it is not adequate for commercial use cases.

- Anyone is welcome to contribute code and make improvements.  Just submit a pull request.

# Update (May 2019)

- I started contributing to a commercial spell checker.  As a result, I will no longer be able to contribute code to this repository.  Please still feel welcome to make pull requests and post issues.

- The commercial spell checker is currently in beta.  If you would like to give it a try, please contact: michael.w@wordreference.com

# How does a Spell Checker work?
A spell checker must be configured with a valid word list.  Given an input string, the spell checker recommends words from the valid word list.

Our spell checker also returns a score between zero and one with each recommended word.  This score is intended to measure the similarity in spelling between the input string and the recommended word.  A higher score means that the input string and the recommended word have a similar spelling while a lower score means that they do not have a similar spelling.

# Getting Started
**Step 1:** Define your valid word list.  This list should contain all (if possible) of the valid words or strings for your application.

In our example, we define a valid word list with 30,000 English language words.  We define our list in a separate file because it is large.  We define our list in a somewhat strange looking way to obtain a performance benefit.

**Step 2:** Include the spellchecker.js file in the body of your html document.  To do this, you can add the following line of code: <script src="spellchecker.js"></script>

**Step 3:** Set the valid word list using the set_valid_word_list method.  To do this, you can use the following line of JavaScript code: set_valid_word_list(word_list);

**Step 4:** Call the find_similar method on your input string.  To do this, you can add the following line of JavaScript code: find_similar(input_string, threshold);

The threshold is a minimum score requirement.  You can set this to any value between 0 and 1.  I would recommend setting it to 0.7 for English language words.

The find_similar method returns a pair consisting of a list of words and a list of associated scores between 0 and 1.

# Demo Website
Link: http://michaelwehar.com/spellchecker/

# License
- MIT
