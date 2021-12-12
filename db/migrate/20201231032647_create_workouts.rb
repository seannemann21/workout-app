class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.integer :user_id
      t.string :workout_type
      t.datetime :started_at
      t.datetime :completed_at

      t.timestamps
    end
  end
end
