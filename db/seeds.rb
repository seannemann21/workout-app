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

sean = User.create(email: 'sean@gmail.com')

strength_workout = Workout.create(user: sean, workout_type: 'strength', started_at: DateTime.new(2020, 12, 30, 18), completed_at: DateTime.new(2020, 12, 30, 19))

bench = Exercise.create(name: 'bench press', workout_type: 'strength', cardio: false)
users_bench = WorkoutExercise.create(exercise: bench, workout: strength_workout)
StrengthSet.create(workout_exercise: users_bench, reps: 8, lbs: 135)
StrengthSet.create(workout_exercise: users_bench, reps: 8, lbs: 155)
StrengthSet.create(workout_exercise: users_bench, reps: 5, lbs: 175)
StrengthSet.create(workout_exercise: users_bench, reps: 4, lbs: 175)

inclined_bench = Exercise.create(name: 'inclined bench press', workout_type: 'strength', cardio: false)
users_inclined_bench = WorkoutExercise.create(exercise: inclined_bench, workout: strength_workout)

StrengthSet.create(workout_exercise: users_inclined_bench, reps: 6, lbs: 135)
StrengthSet.create(workout_exercise: users_inclined_bench, reps: 7, lbs: 135)
StrengthSet.create(workout_exercise: users_inclined_bench, reps: 6, lbs: 135)

cardio_workout = Workout.create(user: sean, workout_type: 'cardio', started_at: DateTime.new(2020, 12, 31, 14), completed_at: DateTime.new(2020, 12, 31, 15))

running = Exercise.create(name: 'running', workout_type: 'cardio', cardio: true)
users_cardio = WorkoutExercise.create(exercise: running, workout: cardio_workout)
CardioSet.create(workout_exercise: users_cardio, distance: 40, duration: 40)

