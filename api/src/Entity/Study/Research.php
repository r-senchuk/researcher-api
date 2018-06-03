<?php
/**
 * Created by roman
 * at 03.06.18 12:59
 * as a part of researcher-api
 */

namespace App\Entity\Study;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * This is a dummy entity. Remove it!
 *
 * @ApiResource
 * @ORM\Entity
 */
class Research
{
    // TODO default data processing

    protected const NAME_DEFAULT = 'Research';

    /**
     * @var int The entity Id
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string A nice person
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $name = self::NAME_DEFAULT;

    public function getId(): int
    {
        return $this->id;
    }

}