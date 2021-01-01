# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |i|
  User.create(email: "user#{i + 1}@gmail.com")
end

jim = User.create(email: "jim@gmail.com")

strength_workout = Workout.create(user: jim, workout_type: 'strength', start_time: DateTime.new(2020, 12, 30, 18), completed: true)

bench = Exercise.create(name: 'bench press', cardio: false)
jims_bench = WorkoutExercise.create(exercise: bench, workout: strength_workout)
StrengthSet.create(workout_exercise: jims_bench, reps: 8, lbs: 135)
StrengthSet.create(workout_exercise: jims_bench, reps: 8, lbs: 155)
StrengthSet.create(workout_exercise: jims_bench, reps: 5, lbs: 175)
StrengthSet.create(workout_exercise: jims_bench, reps: 4, lbs: 175)

inclined_bench = Exercise.create(name: 'inclined bench press', cardio: false)
jims_inclined_bench = WorkoutExercise.create(exercise: inclined_bench, workout: strength_workout)

StrengthSet.create(workout_exercise: jims_inclined_bench, reps: 6, lbs: 135)
StrengthSet.create(workout_exercise: jims_inclined_bench, reps: 7, lbs: 135)
StrengthSet.create(workout_exercise: jims_inclined_bench, reps: 6, lbs: 135)

cardio_workout = Workout.create(workout_type: 'cardio', start_time: DateTime.new(2020, 12, 31, 14), completed: true)

running = Exercise.create(name: 'running', cardio: true)
jims_cardio = WorkoutExercise.create(exercise: running, workout: cardio_workout)
CardioSet.create(workout_exercise: jims_cardio, distance: 40, duration: 40)

