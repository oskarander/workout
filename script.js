let workoutPlan = [
    { name: "Bench Press", sets: 3, reps: "8-12" },
    { name: "Pull-ups", sets: 3, reps: "As many as possible" },
    { name: "Dips", sets: 3, reps: "8-12" },
    { name: "Leg Press", sets: 3, reps: "8-12" },
    { name: "Seated Row", sets: 3, reps: "8-12" },
    { name: "Leg Curls", sets: 3, reps: "8-12" },
    { name: "Overhead Press", sets: 3, reps: "8-12" },
];

let workoutDiv = document.getElementById('workoutPlan');
let activeExercise = null;

workoutPlan.forEach((workout, i) => {
    let workoutElement = document.createElement('div');
    let timerDiv = document.createElement('div');
    timerDiv.innerHTML = `Rest timer: <span id="time${i}">90</span> seconds`;
    let startButton = document.createElement('button');
    startButton.textContent = "Start Timer";
    let stopButton = document.createElement('button');
    stopButton.textContent = "Stop Timer";
    let completeButton = document.createElement('button');
    completeButton.textContent = "Mark as Complete";

    workoutElement.innerHTML = `<h2>${workout.name}</h2><p>Sets: ${workout.sets} - Reps: ${workout.reps}</p>`;
    workoutElement.classList.add('exercise');

    workoutElement.appendChild(timerDiv);
    workoutElement.appendChild(startButton);
    workoutElement.appendChild(stopButton);
    workoutElement.appendChild(completeButton);
    workoutDiv.appendChild(workoutElement);

    let interval;
    startButton.onclick = function() {
        if(activeExercise && activeExercise !== workoutElement) {
            activeExercise.classList.remove('active');
        }
        activeExercise = workoutElement;
        activeExercise.classList.add('active');
        clearInterval(interval);
        let timerSpan = document.getElementById(`time${i}`);
        timerSpan.textContent = '90';
        interval = setInterval(function() {
            let time = Number(timerSpan.textContent);
            if(time <= 0) {
                clearInterval(interval);
            } else {
                timerSpan.textContent = time - 1;
            }
        }, 1000);
    };

    stopButton.onclick = function() {
        clearInterval(interval);
    };
    completeButton.onclick = function() {
        clearInterval(interval);
        workoutElement.classList.remove('active');
        workoutElement.classList.add('complete');
    };
    
});
