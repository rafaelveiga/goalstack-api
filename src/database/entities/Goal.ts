import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GoalType } from "./GoalType";

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalTitle: string;

  @ManyToOne(() => GoalType, (goalType) => goalType.goals)
  goalType: GoalType;
}
