## Name
Are You Really A Student in UofT

## Function
It is a template of multiple choice questions suitable on the mobile side.
The questions are stored in JSON inside js &gt; script.js

## Usage
- Click on "START"
- Choose one in four answers by clicking the button
- Click on "NEXT"
- Repeat until finishing all the questions
- Click on "FINISH"
- Then the answer page will display your score and a button to restart
- Click on "RESTART" if you want to play it again

## Customization
- Open js &gt; script.js
- Go to the end of "option" between the last "}," and "]"
- Add the following code
- IMPORTANT: Do not forget the comma in the last line
```
{
    img: "img/<img name>",
    option1: "<option1>",
    option2: "<option2>",
    option3: "<option3>",
    option4: "<option4>",
    answer: "<answer>",
    description: "<description>"
},
```

### &lt;img name&gt;
- Add the image in the "img" folder
- Change &lt;img name&gt; into the actual image name
- IMPORTANT: Do not forget the extension of the filename (e.g. .jpg, .jpeg, etc.)

### &lt;option1&gt; to &lt;option4&gt;
- Change &lt;option1&gt; to &lt;option4&gt; to your four (4) options
- IMPORTANT: The word limit for each option is ten (10) Chinese characters or twenty (20) English letters.

### &lt;answer&gt;
- Change &lt;answer&gt; to the correct answer
- IMPORTANT: Do not write the actual answer, write one of "option1", "option2", "option3" or "option4" instead.

### &lt;description&gt;
- Change &lt;description&gt; into a sentence explaining why the answer is correct.

## Todos
- Show the reason why the answer is correct ("description") for the previous question after clicking on "NEXT"
- Add logo and quick response code on the answer page
- Add more questions

## Troubleshooting
- "Your score" on the answer page is too low and thus easy to miss.
