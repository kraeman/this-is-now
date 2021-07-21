class CreateValueActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :value_activities do |t|

      t.timestamps
    end
  end
end
