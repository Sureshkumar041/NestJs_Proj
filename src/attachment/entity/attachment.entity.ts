import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user?.id)
  user: number;

  @Column({ type: 'enum', enum: ['profile', 'doc'] })
  type: string;

  @Column({ type: 'varchar' })
  fileName: string;

  @Column({ type: 'varchar' })
  filePath: string;

  @Column({ type: 'varchar' })
  fileDesc: string;

  @Column({ type: 'varchar', nullable: true })
  mimeType: string;

  @Column({ type: 'date' })
  created: Date;

  @Column({ type: 'varchar' })
  createdBy: string;

  @Column({ type: 'date' })
  modified: Date;

  @Column({ type: 'varchar' })
  modifiedBy: string;
}
