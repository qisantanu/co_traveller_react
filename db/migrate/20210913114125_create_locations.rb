class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
